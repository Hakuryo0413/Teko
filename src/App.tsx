import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import "./App.css";
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  IconButton,
  ListItemSecondaryAction,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import SendIcon from "@mui/icons-material/Send";
import ListItemButton from "@mui/material/ListItemButton";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Task } from "@mui/icons-material";
import TaskListItem from "./TaskListItem";

export interface Task {
  id: String;
  task: String;
  date: String;
}
function App() {
  const date = new Date();
  const [task, setTask] = useState<string>("Demo task");
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          component="section"
          sx={{
            p: 2,
            border: "1px grey",
            backgroundColor: "#f9f6ff",
            width: "500px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h6" component="h2">
                TO DO
              </Typography>
            </Box>

            <Button variant="contained" startIcon={<AddIcon />}>
              New task
            </Button>
          </Box>
          <Box>
            <TaskListItem date={date} task={task} />
            {/*  <List
              sx={{ width: "100%", marginTop: 2, bgcolor: "background.paper" }}
            >
              <ListItemButton sx={{ display: "block" }}>
                <Typography variant="subtitle2">
                  {date.toDateString()}
                </Typography>

                <Box sx={{ display: "flex" }}>
                  <ListItemText
                    primary={task}
                    primaryTypographyProps={{
                      variant: "subtitle1",
                      fontWeight: "bold",
                    }}
                  />
                  <ListItemIcon
                    onClick={() => {
                      alert("edit");
                    }}
                  >
                    <EditCalendarIcon sx={{ color: "blue" }} />
                  </ListItemIcon>
                  <ListItemIcon
                    onClick={() => {
                      alert("delete");
                    }}
                  >
                    <DeleteOutlineIcon sx={{ color: "red" }} />
                  </ListItemIcon>
                </Box>
              </ListItemButton>
            </List> */}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
