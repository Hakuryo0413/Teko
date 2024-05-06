import React from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TaskListItem = ({ date, task }: { date: Date; task: string }) => {
  return (
    <List sx={{ width: "100%", marginTop: 2, bgcolor: "background.paper" }}>
      <ListItemButton sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "block" }}>
          <Typography variant="subtitle2">{date.toDateString()}</Typography>
          <ListItemText primary={task} />
        </Box>
        <Box sx={{ display: "block" }}>
          <ListItemIcon
            onClick={() => {
              alert("hihi");
            }}
          >
            <EditCalendarIcon sx={{ color: "blue" }} />
          </ListItemIcon>
          <ListItemIcon>
            <DeleteOutlineIcon sx={{ color: "red" }} />
          </ListItemIcon>
        </Box>
      </ListItemButton>
    </List>
  );
};

export default TaskListItem;
