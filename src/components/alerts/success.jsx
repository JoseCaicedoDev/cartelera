export const Success = () => {
  return (
    <div className="max-w-md py-4 px-6 rounded-lg bg-green-800/80 mx-auto">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl text-white font-semibold">El SHUT se encuentra abierto</h3>
      </div>
    </div>
  )
}
