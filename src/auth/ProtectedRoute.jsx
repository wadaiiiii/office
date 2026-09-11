import {useAuth} from './AuthProvider';

export default function ProtectedRoute({children}){
 const {user}=useAuth();
 if(!user) return <div>Silakan login terlebih dahulu</div>;
 return children;
}
