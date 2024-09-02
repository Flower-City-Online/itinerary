import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ShadowRootHandlerService {
  constructor() {}

  /**
   * Accesses a nested shadow root and applies a callback.
   * @param targetNode - The root element where the custom component is located.
   * @param componentSelectors - An array of selectors leading to the target shadow DOM element.
   * @param callback - The function to execute once the shadow DOM is available.
   */
  accessShadowRoot(
    targetNode: HTMLElement,
    componentName: string,
    callback: () => void
  ) {
    // Query the custom element
    const element = targetNode.querySelector(componentName) as HTMLElement;

    if (element) {
      // Create a MutationObserver to monitor changes
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "childList" || mutation.type === "attributes") {
            callback();
          }
        }
      });

      // Observe the element for changes
      observer.observe(element, {
        childList: true,
        subtree: true,
        attributes: true,
      });

      // Apply callback when the component is initialized
      callback();
    } else {
      console.log(`${componentName} element not found`);
    }
  }
}
