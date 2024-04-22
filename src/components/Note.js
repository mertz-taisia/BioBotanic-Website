function Note({ info, isNote, intoGreenhouse }) {
    const dateColor = isNote ? "#464646" : (intoGreenhouse ? "#02A255" : "#FF6767");

    return (
        <div className="text-sm">
            <div className="mt-4" style={{ color: "#a2a2a2" }}>{info.date}</div>
            <div className="italic text-xs" style={{ color: dateColor }}>{info.text}</div>
        </div>
    );
}

export default Note;
