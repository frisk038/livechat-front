import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/authprovider";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const currentUser = useContext(AuthContext);
  const [nbReveal, setNbReveal] = useState(0);
  const [nbMatch, setnbMatch] = useState(0);
  const [matchLst, setmatchLst] = useState([
    { name: "Sarah", date: "Jan 9, 2014" },
    { name: "Robert", date: "Jan 13, 2016" },
    { name: "Denis", date: "Jan 24, 2019" },
  ]);

  // const [email, setEmail] = useState("");
  // const [lname, setLname] = useState("");
  // useEffect(() => {
  //   setEmail(currentUser?.email || "");
  //   setLname(currentUser?.displayName || "");
  // }, [currentUser]);

  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "row",
          //   alignItems: "center",
        }}
      >
        <Box alignItems="flex-start">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main", width: 128, height: 128 }}></Avatar>
        </Box>

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                disabled
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={currentUser?.displayName?.split("_")[1] || ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                disabled
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={currentUser?.displayName?.split("_")[0] || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                disabled
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={currentUser?.email || ""}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography>Nb. Match: {nbMatch}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Nb. Reveal: {nbReveal}</Typography>
            </Grid>
            <Grid item xs={12}>
              <List
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Latest matches
                  </ListSubheader>
                }
              >
                {matchLst.map((match, idx) => {
                  return (
                    <Box key={idx}>
                      <ListItem>
                        <ListItemText primary={match.name} secondary={match.date} />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </Box>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
