/*
  An error alert card component for displaying error messages.
*/
const ErrorAlertCard = ({ title, details, ...props }) => {
  return (
    <div
      role="alert"
      className="container flex flex-col rounded border-l-4 border-red-600 bg-red-200/80 p-4"
    >
      <div className="flex flex-none font-medium uppercase text-red-800 pb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        <strong className="ml-2">
          {title ? `${title}` : "Something went wrong!"}
        </strong>
      </div>

      <div className="flex-auto">
        <p className="mt-2 ml-2 pl-3 text-sm text-red-700">
          {details
            ? `${details}`
            : "... and the fact you're seeing this message means I'm not sure why :( "}
        </p>
      </div>
    </div>
  )
}

export default ErrorAlertCard
