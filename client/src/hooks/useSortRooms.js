import {useMemo} from "react";

const sortOptions = [
    {value: 'asc', label: 'Lowest Price'},
    {value: 'desc', label: 'Highest Price'}
]

const sortByFunc = {
    asc(a,b) {
        return a-b;
    },
    desc(a,b) {
        return b-a;
    }
}

export default function useSortRooms(rooms, sortBy) {
    const sortRooms = useMemo(() => rooms ? rooms.sort((a,b) => sortByFunc[sortBy](a.PricesInfo.AmountAfterTax, b.PricesInfo.AmountAfterTax)) : [], [rooms, sortBy]);

    return {sortRooms, sortOptions};
}