import Input from "./Input";
export default function UserInput({ onselect }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <Input
            label="Initial Investment"
            type="number"
            required
            min={0}
            name="initialInvestment"
            onChange={onselect}
          />
          <Input
            label="Annual Investment"
            type="number"
            required
            min={0}
            name="annualInvestment"
            onChange={onselect}
          />
        </div>
        <div>
          <Input
            label="Expected returns "
            type="number"
            required
            min={0}
            name="expectedReturn"
            onChange={onselect}
          />
          <Input
            label="Duration"
            type="number"
            required
            min={0}
            name="duration"
            onChange={onselect}
          />
        </div>
      </div>
    </div>
  );
}
// since we are repeating this label and useinput part we have to make a component out of this
// this is the sign we have to make component of that

// now when we are entering ammount then we have to collect that number and have to perform some task

// meadn i have to collect data from the input fields
// and sent to the this investment.js file
//and that function recives the data in object form
