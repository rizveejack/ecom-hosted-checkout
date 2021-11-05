import { useRouter } from "next/router";
import Unsubscribe from "../components/Auth/Unsubscribe";
import ResetPassForm from "../components/Forms/ResetPassForm";
import FrontEnd from "../layout/FrontEnd";

const SetPassword = () => {
    const router = useRouter();
    const resetKey = String(router.query.key || '');
    const login = String(router.query.login || '');

    return (
        <FrontEnd>
            <Unsubscribe>
                <ResetPassForm resetKey={resetKey} login={login} />
            </Unsubscribe>
        </FrontEnd>
    )
}

export default SetPassword
