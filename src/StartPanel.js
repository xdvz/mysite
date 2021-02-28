import React from "react"
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
  Divider,
} from "react95"
import logoIMG from "./assets/img/logo.png"
import PortfolioImage from "./assets/img/portfolio.png"

const StartPanel = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <AppBar>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            <img
              src={logoIMG}
              alt="Start"
              style={{
                height: "25px",
                marginRight: 4,
              }}
            />
            Пуск
          </Button>{" "}
          {open && (
            <List
              style={{ position: "absolute", left: "0", top: "100%" }}
              onClick={() => setOpen(false)}
            >
              <ListItem>
                <span role="img" aria-label="Portfolio">
                  <img
                    src={PortfolioImage}
                    style={{ height: "20px", marginRight: 4 }}
                    alt=""
                  />
                </span>
                Портфолио
              </ListItem>
              <ListItem>
                <span role="img" aria-label="">
                  <img
                    src={PortfolioImage}
                    style={{ height: "20px", marginRight: 4 }}
                    alt=""
                  />
                </span>
                Стэк
              </ListItem>
              <Divider />
              <ListItem>
                <span role="img" aria-label="">
                  <img
                    src={PortfolioImage}
                    style={{ height: "20px", marginRight: 4 }}
                    alt=""
                  />
                </span>
                Контакты
              </ListItem>
            </List>
          )}
        </div>
        <TextField placeholder="Поиск..." width={150} />
      </Toolbar>
    </AppBar>
  )
}

export default StartPanel
