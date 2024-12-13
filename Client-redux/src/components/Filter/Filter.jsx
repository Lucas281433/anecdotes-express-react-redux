import { useDispatch } from "react-redux";
import { filterChange } from "../../reducers/filterReducer";
import { TextField } from "@mui/material";

/**
 * A React component that provides a text input field for filtering anecdotes.
 *
 * This component renders a text field that allows the user to input a filter
 * term. The filter term is dispatched to the Redux store and used to filter
 * the displayed anecdotes. It uses Material UI's TextField component for the
 * input field.
 *
 * @returns {React.ReactElement} The Filter component.
 */
const Filter = () => {
  const dispatch = useDispatch();

  /**
   * Handles the change event of the filter input field.
   *
   * This function takes the input event as its argument and dispatches the
   * current value of the input field to the Redux store using the
   * filterChange action creator.
   * @param {Event} event The input event.
   */
  const handleChange = (event) => {
    const filter = event.target.value;
    dispatch(filterChange(filter));
  };

  return (
    <div>
      <TextField
        variant="outlined"
        label="Filter"
        size="small"
        name="filterInput"
        className="input-style"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
