const Button = ({color = 'pink', title='Example title', onClick, children, }) =>(
<button style={{backgroundColor: color}} onClick= {onClick}>
<p>
    {title}
</p>
{children}
</button>
);
export default Button;    
