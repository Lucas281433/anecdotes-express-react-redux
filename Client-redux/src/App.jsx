import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";
import { Container, Stack } from "@mui/material";

import AnecdoteForm from "./components/AnecdoteForm/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList/AnecdoteList";
import Filter from "./components/Filter/Filter";
import anecdoteImage from "./assets/anecdotes-redux.jpg";

/**
 * The main application component that initializes and renders the
 * anecdote application.
 *
 * This component dispatches an action to initialize anecdotes from the
 * server when it mounts. It renders a container with an image, a filter
 * component, an anecdote form for creating new anecdotes, and a list of
 * anecdotes. The components are styled using a stack layout from Material UI.
 *
 * @returns {React.ReactElement} The App component.
 */
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, []); //eslint-disable-line

  return (
    <Container className="font">
      <Stack direction="column" alignItems="center">
        <img src={anecdoteImage} width="350" className="image-position" />
        <div className="form-position">
          <Filter />
          <AnecdoteForm />
        </div>
        <AnecdoteList />
      </Stack>
    </Container>
  );
};

export default App;
