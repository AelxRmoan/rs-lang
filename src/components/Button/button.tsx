interface Button {
  selector: string,
  name: string,
  content: string,
}

export const Button = ({selector, name, content}:Button): JSX.Element => {
  return (
    <button className={`${selector}`} id={name}>{content}</button>
  )
};
