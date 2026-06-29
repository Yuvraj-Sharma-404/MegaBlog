export default function ImagePlaceholder() {
  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full rounded-xl"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="shimmer">
          <stop offset="20%" stopColor="#f1f5f9" />
          <stop offset="50%" stopColor="#e2e8f0" />
          <stop offset="80%" stopColor="#f1f5f9" />

          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            from="-1 0"
            to="1 0"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>

      <rect width="600" height="400" fill="url(#shimmer)" rx="16" />
    </svg>
  );
}
