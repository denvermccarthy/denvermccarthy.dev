import { useInView } from "react-intersection-observer";

interface HashUpdaterParams {
  id: string;
  onUpdate: (id: string) => void;
}

/**
 * useInViewHashUpdater
 *
 * A custom hook that updates the URL hash when the observed element is in view.
 *
 * @param {string} id - The id of the section to be observed.
 * @param {function} onUpdate - callback function to trigger when the section is in * view.
 *
 * @returns {object} - An object containing the ref to be attached to the observed element.
 *
 * @example
 *
 * function MyComponent() {
 *   const [activeSection, setActiveSection] = useState("");
 *   const { ref } = useInViewHashUpdater({ id: "my-section", setActiveSection });
 *
 *   return (
 *     <div id="my-section" ref={ref}>
 *       <h2>My Section</h2>
 *       <p>This section updates the URL hash when in view.</p>
 *     </div>
 *   );
 * }
 */
export function useInViewHashUpdater({ id, onUpdate }: HashUpdaterParams) {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (inView && window.history.pushState) {
        window.history.pushState({}, "", `#${entry.target.id}`);
        onUpdate(entry.target.id);
        console.log(`In view: ${id}`, entry);
      }
    },
  });

  return { ref };
}
