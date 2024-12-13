import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdote";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    /**
     * Updates the anecdote with the given id in the Redux store.
     *
     * It takes the updated anecdote as its payload and returns a new array
     * where the updated anecdote replaces the old one with the same id.
     * All other anecdotes remain unchanged.
     *
     * @param {object} state The current state of the anecdotes in the Redux store.
     * @param {object} action The action that triggered this reducer.
     * @param {object} action.payload The updated anecdote.
     * @returns {array} A new array of anecdotes with the updated anecdote.
     */
    updateAnecdote(state, action) {
      console.log(action.payload);
      const updatedAnecdote = action.payload;
      return state.map((a) =>
        a.id === updatedAnecdote.id ? updatedAnecdote : a
      );
    },
    
    /**
     * Appends a new anecdote to the array of anecdotes in the Redux store.
     *
     * It takes the new anecdote as its payload and adds it to the end of the
     * array of anecdotes.
     *
     * @param {object} state The current state of the anecdotes in the Redux store.
     * @param {object} action The action that triggered this reducer.
     * @param {object} action.payload The new anecdote to append.
     */
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    
    /**
     * Replaces the current array of anecdotes in the Redux store with the
     * one given as the payload of the action.
     *
     * @param {object} state The current state of the anecdotes in the Redux store.
     * @param {object} action The action that triggered this reducer.
     * @param {object[]} action.payload The array of anecdotes to replace the current one with.
     * @returns {object[]} The new array of anecdotes.
     */
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { updateAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

/**
 * Initializes the anecdotes by fetching them from the server.
 * 
 * This function makes an asynchronous call to the anecdote service to 
 * retrieve all anecdotes. Once the anecdotes are fetched, it dispatches 
 * an action to set the anecdotes in the Redux store.
 */
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

/**
 * Creates a new anecdote by sending a POST request to the server with the
 * content of the anecdote. Once the server responds with the created
 * anecdote, it dispatches an action to append the new anecdote to the
 * anecdotes in the Redux store.
 *
 * @param {string} content The content of the anecdote to create.
 * @returns {function} An action creator that creates a new anecdote and
 *   dispatches an action to append it to the Redux store.
 */
export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.create(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

/**
 * Gives a vote to the anecdote with the given id by incrementing the vote
 * count of the anecdote in the Redux store and updating the anecdote in the
 * server.
 *
 * @param {string} id The id of the anecdote to vote.
 * @returns {function} An action creator that gives a vote to the anecdote
 *   with the given id and dispatches an action to update the anecdote in
 *   the Redux store.
 */
export const giveVote = (id) => {
  return async (dispatch, getState) => {
    const state = getState()
    const anecdoteToChange = state.anecdotes.find(a => a.id === id)

    const updatedVote = await anecdoteService.update(id, {
      ...anecdoteToChange,
      votes: anecdoteToChange.votes + 1,
    });
    dispatch(updateAnecdote(updatedVote));
  };
};

export default anecdoteSlice.reducer;
