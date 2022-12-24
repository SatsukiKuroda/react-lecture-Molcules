import { PrimaryButton } from "./compnents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./compnents/atoms/button/SecondaryButton";
import { SearchInput } from "./compnents/molcules/SearchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>テスト</SecondaryButton>
      <br />
      <SearchInput />
    </div>
  );
}
