export default function PromptInput({ value, onChange, onSubmit, loading }) {
  return (
    <div className="prompt-box">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your prompt..."
        disabled={loading}
      />
      <button onClick={onSubmit} disabled={loading || !value.trim()}>
        {loading ? "Generating..." : "Submit"}
      </button>
    </div>
  );
}
