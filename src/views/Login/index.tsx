import React, {useState} from 'react'
import ApplicationHeader from '../../components/ApplicationHeader'
import {Form, Input, Button, Spin} from "antd";
import './styles.scss'
import {FormattedMessage} from "react-intl";
import LoginModel from "../../ParameterModels/onLoginParameters.model";
import {useApplicationState} from "../../context/Application/store";

const Login = () => {
    const [state, {onLogin}] = useApplicationState()
    const [loading, setLoading] = useState(false)
    const onFinish = async (loginModel: LoginModel) => {
        debugger
        setLoading(true)
        const result = await onLogin(loginModel)
        setLoading(false)
        console.log("rs", result)
        debugger
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <ApplicationHeader title="Y5 Tech Giriş"/>
            <div style={{width: "100%"}}>
                <div className="example">
                    <Spin delay={500} spinning={loading}>
                        <Form
                            layout={"vertical"}
                            initialValues={{remember: false}}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}>
                            <Form.Item
                                label={<FormattedMessage id={"userName"}/>}
                                name="eMail"
                                rules={[{
                                    required: true, type: "email", message: <FormattedMessage id={"validateEmail"}/>
                                }]}>
                                <Input/>

                            </Form.Item>

                            <Form.Item
                                label={<FormattedMessage id={"password"}/>}
                                name="password"
                                rules={[{required: true, min: 8, message: <FormattedMessage id={"validatePassword"}/>}]}
                            >
                                <Input.Password/>

                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    <FormattedMessage id={"onLogin"}/>
                                </Button>
                            </Form.Item>
                        </Form>
                    </Spin>
                </div>

            </div>


        </>
    )
}
export default React.memo(Login)