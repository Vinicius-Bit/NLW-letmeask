type QuestionProps = {
    content: string;
    author: {
        name: string,
        avatar: string,
    }
}

export function QuestionProps(props: QuestionProps) {
    return (
        <div className="question">
            <p></p>
        </div>
    )
}