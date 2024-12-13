import axios from "axios";

const baseUrl = "api/anecdotes";

/**
 * Fetches all anecdotes from the server.
 *
 * @returns {Promise<Array<import("./types").Anecdote>>} Promise that resolves
 *   with an array of all the anecdotes in the server.
 */
const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

/**
 * Creates a new anecdote in the server.
 *
 * @param {string} content The content of the anecdote to create.
 * @returns {Promise<import("./types").Anecdote>} Promise that resolves with the
 *   created anecdote.
 */
const create = async (content) => {
  const anecdote = { content, votes: 0 };
  const response = await axios.post(baseUrl, anecdote);
  return response.data;
};

/**
 * Updates the anecdote with the given id in the server.
 *
 * @param {string} id The id of the anecdote to update.
 * @param {import("./types").Anecdote} anecdote The updated anecdote.
 * @returns {Promise<import("./types").Anecdote>} Promise that resolves with the
 *   updated anecdote.
 */
const update = async (id, anecdote) => {
  const response = await axios.put(`${baseUrl}/${id}`, anecdote);
  return response.data;
};

export default { getAll, create, update };
