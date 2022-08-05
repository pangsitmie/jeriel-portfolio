import React from "react";
import "./header0.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());

const header0 = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
          <h2 className="scroll-text">Hello World...</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <h2 className="scroll-text">I'm Jeriel</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <h3 className="scroll-text">Nice to meet you!</h3>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default header0;
