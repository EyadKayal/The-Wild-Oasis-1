import Table from "../../ui/Table";
// import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import BookingRow from "./BookingRow";
import Pagination from "../../ui/Pagination";
import Empty from "../../ui/Empty";
// import Menus from "../../ui/Menus";

function BookingTable() {
  const { Bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;

  if (!Bookings.length) return <Empty resourceName="Bookings" />;

  return (
    // <Menus>
    <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
      <Table.Header>
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={Bookings}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      />

      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
    // </Menus>
  );
}

export default BookingTable;