import { useDispatch, useSelector } from "react-redux";
import { giveVote } from "../../reducers/anecdoteReducer";
import { setNotification } from "../../reducers/notificationReducer";
import { Card, CardContent, Stack, Button } from "@mui/material";

import Notification from "../Notification/Notification";
import "./AnecdoteList.css";

/**
 * A component that renders a list of anecdotes sorted by number of votes.
 *
 * It also renders a notification component at the top of the list, which
 * is used to display a notification when the user votes for an anecdote.
 *
 * @returns {React.ReactElement} The AnecdoteList component.
 */
const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter) {
      return state.anecdotes.filter((a) => a.content.includes(state.filter));
    }
    return state.anecdotes;
  });

  const dispatch = useDispatch();

  /**
   * Dispatches two actions: giveVote and setNotification.
   * The first one increments the vote count of the anecdote with the given id.
   * The second one sets a notification with the content of the voted anecdote
   * for 10 seconds.
   *
   * @param {string} id The id of the anecdote to vote.
   */
  const vote = (id) => {
    const votedAnecdote = anecdotes.find((a) => a.id === id);

    dispatch(giveVote(id));
    dispatch(setNotification(`You voted ${votedAnecdote.content}`, 10));
  };

  const anecdotesSorted = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <div>
      <h1 className="title-center">Anecdotes</h1>
      <Notification />
      <Stack spacing={2}>
        {anecdotesSorted.map((anecdote) => (
          <Card key={anecdote.id} className="card">
            <CardContent>
              <Stack spacing={1}>
                <div>{anecdote.content}</div>
                <div>
                  Has {anecdote.votes} votes
                  <Button
                    variant="contained"
                    size="small"
                    className="button-style button-vote"
                    onClick={() => vote(anecdote.id)}
                  >
                    vote
                  </Button>
                </div>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default AnecdoteList;
