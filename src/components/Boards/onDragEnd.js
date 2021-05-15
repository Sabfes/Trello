export const onDragEnd = (result, columns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns.filter(el => el.id === source.droppableId);
        const destColumn = columns.filter(el => el.id === destination.droppableId);
        const sourceItems = sourceColumn[0].tasks;
        const destItems = destColumn[0].tasks;
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
    } else {
        const column = columns.filter(el => el.id === source.droppableId);
        const copiedItems = column[0].tasks;
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
    }
};
