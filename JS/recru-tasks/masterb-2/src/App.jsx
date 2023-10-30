const ELLIPSIS = "\u2026"; // Use this in your solution instead of '...' (three dots)

export const ChipList = ({ chips, maxChips, maxTextLength }) => {
  const exampleChip = { label: "123456" };
  const index = 0;

  // Implement your logic here:
  const truncatedChips = chips.slice(0, maxChips);
  const exceedingCount = chips.length - maxChips;

  const exceedingText = exceedingCount > 0 ? `${exceedingCount} more ${exceedingCount === 1 ? 'item' : 'items'}` : '';

  return !chips || chips.length === 0 || maxChips <= 0 || maxTextLength <= 0 ? (
    <></>
  ) : (
    <section style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {truncatedChips.map((chip, index) => (
        <div
          style={{
            border: "1px solid #bbbbbb",
            padding: "4px",
            borderRadius: "8px",
          }}
          data-testid={`chip-${index}`} // use index of each item here
          key={index}
        >
        {chip.label.length > maxTextLength
          ? chip.label.substring(0, maxTextLength) + ELLIPSIS // Truncate long labels
          : chip.label}
        </div>
      ))}

      {exceedingCount > 0 && (
        <aside data-testid={`${exceedingText.replace(/\s+/g, '-')}`}>
          {exceedingText}
        </aside>
      )}
    </section>
  );
};

const sampleChips = [
  { label: "123456789" },
  { label: "123456" },
  { label: "1234567" },
  { label: "12345678" },
  { label: "12345" },
];

// used in the preview tab, don't remove this
//(you can add and change the parameters to test different cases)

export default function App() {
  return <ChipList maxChips={3} maxTextLength={6} chips={sampleChips} />;
  // return <ChipList maxChips={3} chips={sampleChips} />;
  // return <ChipList />;
  // return <ChipList maxTextLength={6} chips={sampleChips} />;
}
