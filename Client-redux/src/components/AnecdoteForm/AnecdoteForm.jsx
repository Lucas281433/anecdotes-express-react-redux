import { TextField, Button, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../../reducers/anecdoteReducer";

/**
 * Form for creating new anecdotes.
 *
 * This component renders a form with a text input for the content of the
 * anecdote and a submit button. When the form is submitted, the content is
 * sent to the server and the input field is cleared.
 *
 * @returns {React.ReactElement} The AnecdoteForm component.
 */
const AnecdoteForm = () => {
  const dispatch = useDispatch();

  /**
   * Handles the submission of the anecdote creation form.
   *
   * When the form is submitted, this function prevents the default behavior
   * of reloading the page. It then gets the content of the text input field
   * and calls the createAnecdote action creator to send the content to the
   * server and update the state. Finally, it clears the input field.
   * @param {Event} event The submit event.
   */
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.newAnecdote.value;
    event.target.newAnecdote.value = "";
    dispatch(createAnecdote(content));
  };

  return (
    <div>
      <h2 className="title-center">Create new</h2>
      <form onSubmit={addAnecdote}>
        <Stack direction="column" alignItems="center" spacing={1}>
          <TextField size="small" name="newAnecdote" className="input-style" />
          <Button variant="contained" type="submit" className="button-style">
            create
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default AnecdoteForm;
