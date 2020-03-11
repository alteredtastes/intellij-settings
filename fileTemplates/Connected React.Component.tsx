import * as React from "react";
    
interface MyProps {}

interface MyInlineProps {}
    
class ${NAME} extends React.Component<MyProps & MyInlineProps> {
    render() {
        return <></>;
    }
}
    
export default connect<MyProps, MyInlineProps>(${NAME});