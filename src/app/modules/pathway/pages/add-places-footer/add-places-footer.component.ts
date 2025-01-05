import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ICONS } from 'src/app/constants/constants';
import { IUserData } from 'src/app/interface/userData';
import { ApiService } from 'src/app/services/core/api.service';
import { MapAreaService } from 'src/app/services/core/map-area.service';
@Component({
  selector: 'app-add-places-footer',
  templateUrl: './add-places-footer.component.html',
  styleUrl: './add-places-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPlacesFooterComponent implements OnInit, OnChanges {
  @Input() selectedLocation!: google.maps.places.PlaceResult | null;
  @Input() timeToArrive: number = 0;
  stayTimeInMins = new FormControl<number | null>(0);
  formattedArrivalTime: string = '';
  @Output() stayTimeSelected = new EventEmitter<number | null>();
  @Output() onLocationAdd =
    new EventEmitter<google.maps.places.PlaceResult | null>();
  @Output() onLocationRemove =
    new EventEmitter<google.maps.places.PlaceResult | null>();
  ICONS = ICONS;
  groupedUsersByFood: {
    food: { name: string; image: string };
    users: IUserData[];
  }[] = [];
  showUsersSearch: boolean = false;
  selectedTab: string | undefined = '1';
  items: MenuItem[] = [
    {
      id: '1',
      label: 'Basic Info',
    },
    {
      id: '2',
      label: 'Date & Time',
    },
    {
      id: '3',
      label: 'Users',
    },
  ];

  users: IUserData[] = [];
  allInvitedUsers: IUserData[] = [];

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private mapAreaService: MapAreaService,
  ) {}

  ngOnInit(): void {
    this.apiService
      .get<IUserData[]>('/assets/usersData.json')
      .subscribe((data) => {
        this.users = data;
        this.groupUsersByFavoriteFood();
        this.cdr.detectChanges();
      });
    this.stayTimeInMins.valueChanges.subscribe();
    const currentTime = new Date();
    const arrivalTime = new Date(
      currentTime.getTime() + this.timeToArrive * 1000,
    );
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };

    this.formattedArrivalTime = arrivalTime.toLocaleTimeString(
      'en-US',
      options,
    );
  }

  groupUsersByFavoriteFood() {
    const grouped = this.users.reduce(
      (
        acc: Record<
          string,
          {
            food: { name: string; image: string };
            users: IUserData[];
          }
        >,
        user,
      ) => {
        user.favoriteFood.forEach((food) => {
          const key = `${food.name}-${food.image}`;
          if (!acc[key]) {
            acc[key] = {
              food: { name: food.name, image: food.image },
              users: [],
            };
          }
          acc[key].users.push(user);
        });
        return acc;
      },
      {},
    );

    this.groupedUsersByFood = Object.values(grouped);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['timeToArrive'] && changes['timeToArrive'].currentValue) {
      this.timeToArrive = changes['timeToArrive'].currentValue;
      const currentTime = new Date();
      const arrivalTime = new Date(
        currentTime.getTime() + this.timeToArrive * 1000,
      );
      const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      };

      this.formattedArrivalTime = arrivalTime.toLocaleTimeString(
        'en-US',
        options,
      );
    }
  }

  handlePeopleClick(): void {
    this.showUsersSearch = true;
    this.mapAreaService.hideMapAction();
    this.cdr.detectChanges();
  }

  onActiveItemChange(value: MenuItem) {
    this.selectedTab = value?.id;
  }

  handleAddClick(): void {
    this.onLocationAdd.emit(this.selectedLocation);
  }

  handleRemoveClick(): void {
    this.onLocationRemove.emit(this.selectedLocation);
  }

  handleContinueClick(): void {
    this.stayTimeSelected.emit(this.stayTimeInMins.value);
  }

  handleInviteUser(user: IUserData): void {
    this.showUsersSearch = false;
    this.mapAreaService.unHideMapAction();
    this.allInvitedUsers.push(user);
  }
}
