from trepi.intranet import PACKAGE_NAME
from zope.schema.vocabulary import SimpleVocabulary

import pytest


class TestVocabEstados:
    name = f"{PACKAGE_NAME}.vocabulary.estados"

    @pytest.fixture(autouse=True)
    def _setup(self, get_vocabulary, portal):
        """Configura o vocabulario para os testes."""
        self.vocab = get_vocabulary(self.name, portal)

    def test_vocabulary(self):
        assert self.vocab is not None
        assert isinstance(self.vocab, SimpleVocabulary)

    @pytest.mark.parametrize(
        "token,title",
        [
            ["PR", "Paraná"],
            ["SP", "São Paulo"],
            ["MT", "Mato Grosso"],
            ["PI", "Piauí"],
        ],
    )
    def test_token(self, token: str, title: str):
        term = self.vocab.getTerm(token)
        assert term.title == title
