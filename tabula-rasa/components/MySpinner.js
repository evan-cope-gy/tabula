import { PulseLoader } from "react-spinners"


const Spinner = ({ loading, ...props }) => {

    return (
        loading && (
            <div className="container">
                <PulseLoader
                    color="rgba(139, 92, 246, 0.7)"
                    margin={5}
                    size={20}
                    speedMultiplier={0.85}
                    className="text-center"
                />
                <span className="sr-only">Loading</span>
            </div>
        )
    )
}

export default Spinner