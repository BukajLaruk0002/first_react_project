const Button = ({color = 'pink', title='Example title', onClick, children, }) => 
<button style={{backgroundColor: color}} onClick= {onclick}>
<p>
    {title}
</p>
{children}
</button>;

export default Button;    
