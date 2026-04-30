import { useMemo, useState } from "react";

export default function Expensive() {
  const [num, setNum] = useState(0);

  const squared = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]);

  return (
    <div>
      <p>{squared}</p>
      <button onClick={() => setNum(num + 1)}>Increase</button>
    </div>
  );
}