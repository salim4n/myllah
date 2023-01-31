import {
	HydraAdmin,
	CreateGuesser,
	InputGuesser,
	ResourceGuesser,
	ShowGuesser,
	EditGuesser,
	ListGuesser,
	FieldGuesser,
} from "@api-platform/admin";
import { RichTextInput, DefaultEditorOptions } from "ra-input-rich-text";
import { RichTextField, TextField, Resource } from "react-admin";

const RecetteList = (props) => (
	<ListGuesser {...props}>
		<FieldGuesser source={"title"} />
		<FieldGuesser source={"description"} hidden />
	</ListGuesser>
);

const RecetteCreate = (props) => (
	<CreateGuesser {...props}>
		<InputGuesser source="title" />
		<RichTextInput source="description" row={5} />
	</CreateGuesser>
);

const RecetteEdit = (props) => (
	<EditGuesser {...props}>
		<InputGuesser source="title" />
		<RichTextInput source="description" />
	</EditGuesser>
);

const RecetteShow = (props) => (
	<ShowGuesser {...props}>
		<TextField source="title" />
		<RichTextField source="description" />
	</ShowGuesser>
);

export default () => (
	<HydraAdmin entrypoint="http://127.0.0.1:8000/api/">
		<ResourceGuesser
			name={"recettes"}
			list={RecetteList}
			create={RecetteCreate}
			edit={RecetteEdit}
			show={RecetteShow}
		/>
	</HydraAdmin>
);
