from trepi.intranet import logger
from trepi.intranet.content.area import Area
from zope.interface.interfaces import IObjectEvent
from zope.lifecycleevent import IObjectModifiedEvent
from zope.lifecycleevent import ObjectAddedEvent


def _update_excluded_from_nav(obj: Area):
    """Update excluded_from_nav in the Area object."""
    description = obj.description
    obj.exclude_from_nav = not bool(description)
    logger.info(f"Atualizado o campo excluded_from_nav para {obj.title}")


def added(obj: Area, event: ObjectAddedEvent):
    """Post creation handler for Area."""
    _update_excluded_from_nav(obj)


def modified(obj: Area, event: IObjectModifiedEvent):
    """Post creation handler for Area."""
    _update_excluded_from_nav(obj)


def all_events(event: IObjectEvent):
    """Logar eventos."""
    logger.debug(f"Nome do evento: {event.__class__.__name__}")
