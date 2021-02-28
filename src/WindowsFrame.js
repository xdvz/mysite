import React from "react"
import styled from "styled-components"
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
} from "react95"

const Wrapper = styled.div`
  padding: 5rem;
  background: teal;
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      background: black;
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 400px;
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`

const WindowsFrame = () => (
  <Wrapper>
    <Window resizable className="window">
      <WindowHeader className="window-header">
        <span>hello95.exe</span>
        <Button>
          <span className="close-icon" />
        </Button>
      </WindowHeader>
      <Toolbar>
        <Button variant="menu" size="sm">
          Файл
        </Button>
        <Button variant="menu" size="sm">
          Изменить
        </Button>
        <Button variant="menu" size="sm" disabled>
          Сохранить
        </Button>
      </Toolbar>
      <WindowContent>
        <p>
          When you set &quot;resizable&quot; prop, there will be drag handle in
          the bottom right corner (but resizing itself must be tho!)
        </p>
      </WindowContent>
      <Panel variant="well" className="footer">
        Put some useful informations here
      </Panel>
    </Window>

    <Window className="window">
      <WindowHeader active={false} className="window-header">
        <span>not-active.exe</span>
        <Button>
          <span className="close-icon" />
        </Button>
      </WindowHeader>
      <WindowContent>I am not active</WindowContent>
    </Window>
  </Wrapper>
)

export default WindowsFrame
