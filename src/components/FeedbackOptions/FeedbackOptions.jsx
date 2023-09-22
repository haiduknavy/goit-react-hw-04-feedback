import { List, Item } from './FeedbackOptions.styled';

const FeedbackOptions = ({options,handleClick})=>{
return (
<List>
{options.map((option)=>
(<Item key={option}>
    <button onClick={()=> handleClick(option)}>{option}</button>
</Item>)
)}
</List>)
}

export default FeedbackOptions;