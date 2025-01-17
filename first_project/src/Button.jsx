const Button = ({isActive, onClick, children, }) =>(
<button style={{backgroundColor: isActive ? "green" : undefined}} onClick= {onClick}>
{children}
</button>
);
export default Button;    
