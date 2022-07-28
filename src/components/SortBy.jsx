export default function SortBy({ setSortColumn, setSortOrder }) {
    return (
      <div>
        <form>
          <label htmlFor="sort-by">Sort by:</label>
          <select
            id="sort-by"
            onChange={(e) => {
              setSortColumn(e.target.value);
            }}
          >
            <option value={"created_at"}>date</option>
            <option value={"votes"}>votes</option>
          </select>
          <select
            id="order"
            onChange={(e) => {
              setSortOrder(e.target.value);
            }}
          >
            <option value={"desc"}>descending</option>
            <option value={"asc"}>ascending</option>
          </select>
          <br />
        </form>
      </div>
    );
  }