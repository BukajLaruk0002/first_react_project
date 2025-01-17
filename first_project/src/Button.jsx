const Button = ({color, title='Example title', onClick, children}) => 
<button style={{onClick}}>
<p>
    {title}
</p>
{children}
</button>;

export default Button;    
