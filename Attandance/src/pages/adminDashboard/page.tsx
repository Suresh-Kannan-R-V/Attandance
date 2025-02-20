"use client";

import { AttendanceChart } from "@/components/attendance-chart";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  List,
  ListItem,
} from "@mui/material";

export const AdminDashboard = () => {
  return (
    <div style={{ maxWidth: 1200, margin: "auto", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Overall Attendance" />
            <CardContent>
              <AttendanceChart />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Attendance by Department" />
            <CardContent>
              <AttendanceChart />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Attendance Trends" />
            <CardContent>
              <AttendanceChart />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Low Attendance Students" />
            <CardContent>
              <List>
                <ListItem>John Doe - 65%</ListItem>
                <ListItem>Jane Smith - 70%</ListItem>
                <ListItem>Mike Johnson - 72%</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
