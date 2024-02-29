import React from 'react'
import Clock from "../components/Clock";
import Rain from "../components/Rain";
import JokeFooter from "../components/JokeFooter";
export default function Prod() {
  return (
    <div>
    <div class="overlay-l">
 <Clock />
 </div>
 <div class="overlay-r">
<Rain />
</div>
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSrDytNtQWGG-okdAqzLABY1_UOQQ1aHvwy8G-kCcHclMzafKqoGy3BnS401e_2lFEtceLmtuaXV1fF/embed?start=true&loop=true&delayms=10000" frameborder="0" width="1920" height="1080" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

    </div>
    <JokeFooter />


  )
}
