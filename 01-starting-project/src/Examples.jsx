import { useState } from "react";
import TabButton from "./Components/TabButtons";
import { EXAMPLES } from "./data";
import Section from "./Components/Section";
import Tabs from "./Components/Tabs";
export default function Examples() {
  let p = <p>Please click a button </p>;
  let dynamic = p;
  const [content, setcontent] = useState("");
  function HandelCick(clickedbutton) {
    setcontent(clickedbutton);
  }
  if (content) {
    dynamic = (
      <div id="tab-content">
        <h3>{EXAMPLES[content].title}</h3>
        <p> {EXAMPLES[content].description}</p>
        <pre>
          <code>{EXAMPLES[content].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
      Buttoncontainer ="menu"
        button={
          <>
            <TabButton
              isSelected={content === "components"}
              onSelect={() => HandelCick("components")}
            >
              {" "}
              components
            </TabButton>
            <TabButton
              isSelected={content === "jsx"}
              onSelect={() => HandelCick("jsx")}
            >
              {" "}
              JSX
            </TabButton>
            <TabButton
              isSelected={content === "props"}
              onSelect={() => HandelCick("props")}
            >
              {" "}
              props
            </TabButton>
            <TabButton
              isSelected={content === "state"}
              onSelect={() => HandelCick("state")}
            >
              {" "}
              state
            </TabButton>
          </>
        }
      >
        {" "}
        {dynamic}{" "}
      </Tabs>
    </Section>
  );
}

// when we have the functionality on one page and we want to use it to another page
// then we can pass the content as a prop in it
// when you send whole content as prop
// then react behind the hod done all the functionalty and would pass
// it to the prop in which you wanted


// we can give dynamic wrpper container to any component which we need 
// two conditions first one is that should be start with Uppercharacter 
// and when we are coustom component to it is to be used as variable
// when we are not using it as a coustom component then we give it as string 