import React from "react";
import { Button as UiButton } from "../ui/button";
import { Button } from "../Button/Button";

const App = () => {
  return  (
    <>
      <UiButton>default</UiButton>
      <UiButton variant={'secondary'}>secondary</UiButton>
      <UiButton variant={'link'}>link</UiButton>
      <Button>default</Button>
      <Button variant={'secondary'}>secondary</Button>
      <Button variant={'link'}>link</Button>
    </>
  )

};

export default App;