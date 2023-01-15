/*
    A spinner component for indicating a loading state (uses react-spinners).
*/
import { PulseLoader } from "react-spinners"
/* ========================================================================= */

const Spinner = ({ ...props }) => {
  return (
    <div className="container">
      <PulseLoader
        color="rgba(139, 92, 246, 0.7)"
        margin={5}
        size={30}
        speedMultiplier={0.85}
        className="text-center p-5"
      />
      <span className="sr-only">Loading</span>
    </div>
  )
}

export default Spinner
