import "../preview.styles.css"
export function Preview({ value }: { value: string }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: value }} className="ui-text-brand-lightblack" style={{
            color: "#51697f"
        }} id="preview_div" />
    )
}