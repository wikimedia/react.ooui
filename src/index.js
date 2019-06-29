import OO from 'oojs';
import 'oojs-ui';
import fromOOUI from './ooui';

// General
const Element = fromOOUI( OO.ui.Element );
const HtmlSnippet = fromOOUI( OO.ui.HtmlSnippet );
const Toolbar = fromOOUI( OO.ui.Toolbar, [ 'toolFactory', 'toolGroupFactory' ] );
const Window = fromOOUI( OO.ui.Window );
const WindowInstance = fromOOUI( OO.ui.WindowInstance );
const WindowManager = fromOOUI( OO.ui.WindowManager );
const Process = fromOOUI( OO.ui.Process, [ 'step', 'context' ] );
const Error = fromOOUI( OO.ui.Error, [ 'message' ] );
const ActionSet = fromOOUI( OO.ui.ActionSet );

// Factories
const ToolFactory = fromOOUI( OO.ui.ToolFactory );
const ToolGroupFactory = fromOOUI( OO.ui.ToolGroupFactory );

// Tools
const PopupTool = fromOOUI( OO.ui.PopupTool, [ 'toolGroup' ] );
const Tool = fromOOUI( OO.ui.Tool, [ 'toolGroup' ] );
const ToolGroupTool = fromOOUI( OO.ui.ToolGroupTool, [ 'toolGroup' ] );

// Layouts
const ActionFieldLayout = fromOOUI( OO.ui.ActionFieldLayout, [ 'fieldWidget', 'buttonWidget' ] );
const BookletLayout = fromOOUI( OO.ui.BookletLayout );
const FieldLayout = fromOOUI( OO.ui.FieldLayout, [ 'fieldWidget' ] );
const FieldsetLayout = fromOOUI( OO.ui.FieldsetLayout );
const FormLayout = fromOOUI( OO.ui.FormLayout );
const HorizontalLayout = fromOOUI( OO.ui.HorizontalLayout );
const IndexLayout = fromOOUI( OO.ui.IndexLayout );
const Layout = fromOOUI( OO.ui.Layout );
const MenuLayout = fromOOUI( OO.ui.MenuLayout );
const PageLayout = fromOOUI( OO.ui.PageLayout, [ 'name' ] );
const PanelLayout = fromOOUI( OO.ui.PanelLayout );
const StackLayout = fromOOUI( OO.ui.StackLayout );
const TabPanelLayout = fromOOUI( OO.ui.TabPanelLayout, [ 'name' ] );

// Tool groups
const BarToolGroup = fromOOUI( OO.ui.BarToolGroup, [ 'toolbar' ] );
const ListToolGroup = fromOOUI( OO.ui.ListToolGroup, [ 'toolbar' ] );
const MenuToolGroup = fromOOUI( OO.ui.MenuToolGroup, [ 'toolbar' ] );
const PopupToolGroup = fromOOUI( OO.ui.PopupToolGroup );
const ToolGroup = fromOOUI( OO.ui.ToolGroup, [ 'toolbar' ] );

// Widgets
const ActionWidget = fromOOUI( OO.ui.ActionWidget );
const ButtonGroupWidget = fromOOUI( OO.ui.ButtonGroupWidget );
const ButtonInputWidget = fromOOUI( OO.ui.ButtonInputWidget );
const ButtonOptionWidget = fromOOUI( OO.ui.ButtonOptionWidget );
const ButtonSelectWidget = fromOOUI( OO.ui.ButtonSelectWidget );
const ButtonWidget = fromOOUI( OO.ui.ButtonWidget );
const CheckboxInputWidget = fromOOUI( OO.ui.CheckboxInputWidget );
const CheckboxMultioptionWidget = fromOOUI( OO.ui.CheckboxMultioptionWidget );
const CheckboxMultiselectInputWidget = fromOOUI( OO.ui.CheckboxMultiselectInputWidget );
const CheckboxMultiselectWidget = fromOOUI( OO.ui.CheckboxMultiselectWidget );
const ComboBoxInputWidget = fromOOUI( OO.ui.ComboBoxInputWidget );
const DecoratedOptionWidget = fromOOUI( OO.ui.DecoratedOptionWidget );
const DropdownInputWidget = fromOOUI( OO.ui.DropdownInputWidget );
const DropdownWidget = fromOOUI( OO.ui.DropdownWidget );
const HiddenInputWidget = fromOOUI( OO.ui.HiddenInputWidget );
const IconWidget = fromOOUI( OO.ui.IconWidget );
const IndicatorWidget = fromOOUI( OO.ui.IndicatorWidget );
const InputWidget = fromOOUI( OO.ui.InputWidget );
const LabelWidget = fromOOUI( OO.ui.LabelWidget );
const MenuOptionWidget = fromOOUI( OO.ui.MenuOptionWidget );
const MenuSectionOptionWidget = fromOOUI( OO.ui.MenuSectionOptionWidget );
const MenuSelectWidget = fromOOUI( OO.ui.MenuSelectWidget );
const MenuTagMultiselectWidget = fromOOUI( OO.ui.MenuTagMultiselectWidget );
const MultilineTextInputWidget = fromOOUI( OO.ui.MultilineTextInputWidget );
const MultioptionWidget = fromOOUI( OO.ui.MultioptionWidget );
const MultiselectWidget = fromOOUI( OO.ui.MultiselectWidget );
const NumberInputWidget = fromOOUI( OO.ui.NumberInputWidget );
const OptionWidget = fromOOUI( OO.ui.OptionWidget );
const OutlineControlsWidget = fromOOUI( OO.ui.OutlineControlsWidget, [ 'outline' ] );
const OutlineOptionWidget = fromOOUI( OO.ui.OutlineOptionWidget );
const OutlineSelectWidget = fromOOUI( OO.ui.OutlineSelectWidget );
const PopupButtonWidget = fromOOUI( OO.ui.PopupButtonWidget );
const PopupTagMultiselectWidget = fromOOUI( OO.ui.PopupTagMultiselectWidget );
const PopupWidget = fromOOUI( OO.ui.PopupWidget );
const ProgressBarWidget = fromOOUI( OO.ui.ProgressBarWidget );
const RadioInputWidget = fromOOUI( OO.ui.RadioInputWidget );
const RadioOptionWidget = fromOOUI( OO.ui.RadioOptionWidget );
const RadioSelectInputWidget = fromOOUI( OO.ui.RadioSelectInputWidget );
const RadioSelectWidget = fromOOUI( OO.ui.RadioSelectWidget );
const SearchInputWidget = fromOOUI( OO.ui.SearchInputWidget );
const SearchWidget = fromOOUI( OO.ui.SearchWidget );
const SelectFileInputWidget = fromOOUI( OO.ui.SelectFileInputWidget );
const SelectFileWidget = fromOOUI( OO.ui.SelectFileWidget );
const SelectWidget = fromOOUI( OO.ui.SelectWidget );
const TabOptionWidget = fromOOUI( OO.ui.TabOptionWidget );
const TabSelectWidget = fromOOUI( OO.ui.TabSelectWidget );
const TagItemWidget = fromOOUI( OO.ui.TagItemWidget );
const TagMultiselectWidget = fromOOUI( OO.ui.TagMultiselectWidget );
const TextInputWidget = fromOOUI( OO.ui.TextInputWidget );
const ToggleButtonWidget = fromOOUI( OO.ui.ToggleButtonWidget );
const ToggleSwitchWidget = fromOOUI( OO.ui.ToggleSwitchWidget );
const ToggleWidget = fromOOUI( OO.ui.ToggleWidget );
const Widget = fromOOUI( OO.ui.Widget );

// Dialogs
const Dialog = fromOOUI( OO.ui.Dialog );
const MessageDialog = fromOOUI( OO.ui.MessageDialog );
const ProcessDialog = fromOOUI( OO.ui.ProcessDialog );

// Themes
const ApexTheme = fromOOUI( OO.ui.ApexTheme );
const BlankTheme = fromOOUI( OO.ui.BlankTheme );
const Theme = fromOOUI( OO.ui.Theme );
const WikimediaUITheme = fromOOUI( OO.ui.WikimediaUITheme );

export {
	fromOOUI,
	Element,
	HtmlSnippet,
	Toolbar,
	Window,
	WindowInstance,
	WindowManager,
	Process,
	Error,
	ActionSet,
	ToolFactory,
	ToolGroupFactory,
	PopupTool,
	Tool,
	ToolGroupTool,
	ActionFieldLayout,
	BookletLayout,
	FieldLayout,
	FieldsetLayout,
	FormLayout,
	HorizontalLayout,
	IndexLayout,
	Layout,
	MenuLayout,
	PageLayout,
	PanelLayout,
	StackLayout,
	TabPanelLayout,
	BarToolGroup,
	ListToolGroup,
	MenuToolGroup,
	PopupToolGroup,
	ToolGroup,
	ActionWidget,
	ButtonGroupWidget,
	ButtonInputWidget,
	ButtonOptionWidget,
	ButtonSelectWidget,
	ButtonWidget,
	CheckboxInputWidget,
	CheckboxMultioptionWidget,
	CheckboxMultiselectInputWidget,
	CheckboxMultiselectWidget,
	ComboBoxInputWidget,
	DecoratedOptionWidget,
	DropdownInputWidget,
	DropdownWidget,
	HiddenInputWidget,
	IconWidget,
	IndicatorWidget,
	InputWidget,
	LabelWidget,
	MenuOptionWidget,
	MenuSectionOptionWidget,
	MenuSelectWidget,
	MenuTagMultiselectWidget,
	MultilineTextInputWidget,
	MultioptionWidget,
	MultiselectWidget,
	NumberInputWidget,
	OptionWidget,
	OutlineControlsWidget,
	OutlineOptionWidget,
	OutlineSelectWidget,
	PopupButtonWidget,
	PopupTagMultiselectWidget,
	PopupWidget,
	ProgressBarWidget,
	RadioInputWidget,
	RadioOptionWidget,
	RadioSelectInputWidget,
	RadioSelectWidget,
	SearchInputWidget,
	SearchWidget,
	SelectFileInputWidget,
	SelectFileWidget,
	SelectWidget,
	TabOptionWidget,
	TabSelectWidget,
	TagItemWidget,
	TagMultiselectWidget,
	TextInputWidget,
	ToggleButtonWidget,
	ToggleSwitchWidget,
	ToggleWidget,
	Widget,
	Dialog,
	MessageDialog,
	ProcessDialog,
	ApexTheme,
	BlankTheme,
	Theme,
	WikimediaUITheme
};
