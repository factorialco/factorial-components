import {
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow
} from './Table'
import { Tooltip, TooltipPad, TooltipButton } from './Tooltip'
import ActionItem from './ActionItem'
import Avatar from './Avatar'
import BoxList from './BoxList'
import Button from './Buttons/Button'
import Country from './Inputs/Country'
import Chevron from './Chevron'
import ColorButton from './Buttons/ColorButton'
import EmployeeSelector from './EmployeeSelector'
import Form from './Form'
import FormRow from './FormRow'
import Icon from './Icon'
import Illustration from './Illustration'
import InlineTooltip from './InlineTooltip'
import LabeledInput from './Inputs/LabeledInput'
import LinkButton from './Buttons/LinkButton'
import Loading from './Loading'
import Modal from './Modal'
import ModalFooter from './Modal/Footer'
import ModalPad from './Modal/Pad'
import ModalSubmit from './Modal/Submit'
import PricingCard from './PricingCard'
import ReadOnlyField from './ReadOnlyField'
import RoundButton from './Buttons/RoundButton'
import RoundedBadge from './RoundedBadge'
import ScrollableItem from './ScrollableItem'
import ScrollableList from './ScrollableList'
import Separator from './Separator'
import SidebarButton from './Buttons/SidebarButton'
import Steps from './Steps'
import Text from './Inputs/Text'
import Select from './Inputs/Select'
import DayPicker from './Inputs/DayPicker'
import Title from './Title'
import WithToggleState from './WithToggleState'

import configuration from '../shared'

export default function main ({ iconsPath }) {
  configuration.iconsPath = iconsPath
}

export {
  Avatar,
  ActionItem,
  BoxList,
  Button,
  Chevron,
  Country,
  ColorButton,
  DayPicker,
  EmployeeSelector,
  Form,
  FormRow,
  Icon,
  Illustration,
  InlineTooltip,
  LabeledInput,
  LinkButton,
  Loading,
  Modal,
  ModalFooter,
  ModalPad,
  ModalSubmit,
  PricingCard,
  ReadOnlyField,
  RoundButton,
  RoundedBadge,
  ScrollableItem,
  ScrollableList,
  Select,
  Separator,
  SidebarButton,
  Steps,
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Text,
  Title,
  Tooltip,
  TooltipPad,
  TooltipButton,
  WithToggleState
}
