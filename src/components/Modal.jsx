import { useMainContext } from '../context/MainContext';

const Modal = () => {
	const { data, setData } = useMainContext();
	const handleCloseModal = () => {
		setData(!data);
	};

	return (
		<>
			<div
				onClick={handleCloseModal}
				className={`h-screen w-screen bg-black absolute opacity-75 ${
					data ? 'opacity-75' : 'opacity-0 scale-0'
				}`}
			></div>
			<div
				className={`${
					data ? '' : 'opacity-0 scale-0'
				} transition-all duration-150 absolute inter flex justify-center items-center`}
			>
				<div className="bg-white py-4 px-6 rounded-xl relative">
					<h1 className="text-3xl text-center mt-4">Inicia sesión</h1>
					<div
						onClick={handleCloseModal}
						className="w-[15px] h-[15px] closeTag absolute right-3 top-3 cursor-pointer"
					/>
					<form className="flex flex-col gap-4 my-4 sm:min-w-[320px]">
						<div className="flex flex-col">
							<label>Correo:</label>
							<input
								type="email"
								className="bg-white text-[#858585] border-2 p-2 rounded-lg"
							/>
						</div>
						<div className="flex flex-col">
							<label>Contraseña:</label>
							<input
								type="password"
								className="bg-white text-[#858585] border-2 p-2 rounded-lg"
							/>
						</div>
						<button className="bg-[#3D5CFF] hover:bg-[#334dcf] text-white rounded-3xl p-2">
							Iniciar sesión
						</button>
						<h1 className="text-center">O también ingresa con:</h1>
						<button className="bg-white hover:bg-gray-100 flex justify-center gap-2 text-black border-2 rounded-3xl p-2">
							<div className="w-[20px] h-[20px] google" />
							<h1>Google</h1>
						</button>
						<button className="bg-[#385898] hover:bg-[#304d85] flex justify-center gap-2 text-white rounded-3xl p-2">
							<div className="w-[20px] h-[20px] facebook" />
							Facebook
						</button>
						<button className="bg-white hover:bg-gray-100 flex justify-center gap-2 border-2 text-black rounded-3xl p-2">
							<div className="w-[20px] h-[20px] apple" />
							Apple
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Modal;
