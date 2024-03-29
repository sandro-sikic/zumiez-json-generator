// @refresh reload
import { Suspense } from 'solid-js';
import {
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title,
} from 'solid-start';
import './root.css';
export default function Root() {
	return (
		<Html lang="en">
			<Head>
				<Title>Zumiez json generator</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Body className="flex flex-col bg-gray-50 h-screen">
				<Suspense>
					<ErrorBoundary>
						<Routes>
							<FileRoutes />
						</Routes>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);
}
